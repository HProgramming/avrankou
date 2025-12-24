interface FlagLineProps {
    height?: string;
}

export default function FlagLine({ height = "h-1" }: FlagLineProps) {

    return (
        <div className={`flex ${height}`}>
            <div className="flex-1 bg-green-500" />
            <div className="flex-1 bg-yellow-400" />
            <div className="flex-1 bg-red-500" />
        </div>
    )
}
