//typescript
type ButtonProps = {
    children?: string;
} // ? ponto de interrogação torna opcional

export function Button(props: ButtonProps) {
    return (
        <button>{props.children || 'Button'}</button>
    )
}
