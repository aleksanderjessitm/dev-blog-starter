interface Props {
    text: string
}

function Chip({ text }: Props) {
    return (
        <span
            className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max"
            title={`Tag: ${text}`}
            >
            {text}
        </span>
    )
}

export default Chip