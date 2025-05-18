import { Button } from '@/app/components/ui/button';
import { RiAlarmWarningFill, RiRestartLine, RiToggleLine } from '@remixicon/react';
import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
    showExtensionHelp: boolean;
    browserType: 'chrome' | 'firefox' | 'edge' | 'other';
    isExtensionEnabled: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            showExtensionHelp: false,
            browserType: this.detectBrowser(),
            isExtensionEnabled: true
        };
    }

    componentDidMount() {
        // Check extension state from Chrome storage if available
        if (typeof chrome !== 'undefined' && chrome.storage) {
            try {
                chrome.storage.local.get('enabled', (data) => {
                    const storageEnabled = data['enabled'] === undefined ? true : data['enabled'];
                    this.setState({ isExtensionEnabled: storageEnabled });
                });
            } catch (error) {
                console.error('Error accessing extension storage:', error);
            }
        }
    }

    detectBrowser(): 'chrome' | 'firefox' | 'edge' | 'other' {
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.indexOf('edg') !== -1) return 'edge';
        if (userAgent.indexOf('chrome') !== -1) return 'chrome';
        if (userAgent.indexOf('firefox') !== -1) return 'firefox';

        return 'other';
    }

    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    toggleExtensionHelp = () => {
        this.setState(prevState => ({
            showExtensionHelp: !prevState.showExtensionHelp
        }));
    };

    toggleExtension = () => {
        if (typeof chrome === 'undefined' || !chrome.storage) {
            this.openExtensionsPage();
            return;
        }

        const newState = !this.state.isExtensionEnabled;
        this.setState({ isExtensionEnabled: newState });

        // Update Chrome storage
        try {
            chrome.storage.local.set({ enabled: newState }, () => {
                if (chrome.runtime.lastError) {
                    console.error('Error updating storage:', chrome.runtime.lastError);
                    return;
                }

                // Ask to reload the page
                // if (confirm('Extension ' + (newState ? 'enabled' : 'disabled') + '. Reload page?')) {
                //     window.location.reload();
                // }
                window.location.reload();
            });
        } catch (error) {
            console.error('Error toggling extension:', error);
            // Fallback to opening extensions page
            this.openExtensionsPage();
        }
    };

    openExtensionsPage = () => {
        const { browserType } = this.state;
        let extensionsUrl = '';

        switch (browserType) {
            case 'chrome':
                extensionsUrl = 'chrome://extensions/';
                break;
            case 'firefox':
                extensionsUrl = 'about:addons';
                break;
            case 'edge':
                extensionsUrl = 'edge://extensions/';
                break;
            default:
                // For other browsers, show instructions in a popup
                alert('To disable the extension, please open your browser\'s extension settings page.');
                return;
        }

        // Try to open the extensions page
        try {
            window.open(extensionsUrl, '_blank');
        } catch (error) {
            // If it fails (some browsers block chrome:// URLs), show a popup with instructions
            alert(`Please open ${extensionsUrl} in a new tab to manage your extensions.`);
        }
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default fallback UI
            return (
                <div className="flex flex-col items-center justify-center min-h-[70vh] p-6">
                    <div className="text-destructive mb-4">
                        <RiAlarmWarningFill className="h-16 w-16 mx-auto" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
                    <p className="text-muted-foreground mb-6 text-center max-w-md">
                        We encountered an unexpected error. You can try reloading the page to resolve the issue.
                    </p>
                    <div className="flex gap-3 mb-3">
                        <Button
                            onClick={this.handleReload}
                            className="flex items-center gap-2"
                        >
                            <RiRestartLine />
                            Reload Page
                        </Button>

                        <Button
                            onClick={this.toggleExtension}
                            variant={typeof chrome !== 'undefined' && chrome.storage ? "secondary" : "outline"}
                            className="flex items-center gap-2"
                        >
                            <RiToggleLine />
                            {typeof chrome !== 'undefined' && chrome.storage
                                ? (this.state.isExtensionEnabled ? "Disable Extension" : "Enable Extension")
                                : "Manage Extensions"}
                        </Button>
                    </div>
                    <small className="text-muted-foreground mb-6 text-center max-w-md">
                        If the issue persists, you can try disabling the extension temporarily.
                    </small>
                </div>
            );
        }

        return this.props.children;
    }
}

export { ErrorBoundary };
