export default function ChatBox(props) {
    return (
        <>
            <div className="grid place-content-center relative">
                <div className="h-vh-95 w-vw-95 flex p-4 border-4 bg-grey-700 rounded-t-xl relative">
                    {props.children}
                </div>
            </div>
        </>
    )
}