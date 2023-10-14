export default function MainPage({ body, header }: { body: string, header: string },) {
    return <div><h1 className="text-red-500 font-bold text-2xl">{body} {header}</h1></div>;
}