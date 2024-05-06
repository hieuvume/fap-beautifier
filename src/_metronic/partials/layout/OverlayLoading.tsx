type Props = {
  show?: boolean
}
const OverlayLoading: React.FC<Props> = ({ show: visible = true }) => {
  if (!visible) return <></>
  return (
    <div className="overlay-layer card-rounded bg-dark bg-opacity-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default OverlayLoading