export default function Error({ error }) {
    return (
        <div>
            <span>Error</span>
            <span>${error.message}</span>
        </div>
    )
}