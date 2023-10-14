export default function MainPage({ body, header }: { body: string, header: string },) {
    return <div><h1>{body} {header}</h1></div>;
}