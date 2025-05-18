import { Loader2 } from 'lucide-react';
import { useLayoutEffect } from 'react';

const NoSupportedRoute = () => {
    // nếu đường dẫn không tồn tại thì reload trang
    useLayoutEffect(() => {
        window.location.reload();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin" />
                <p className="text-sm text-muted-foreground">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default NoSupportedRoute;