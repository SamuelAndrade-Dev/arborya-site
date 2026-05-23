type SectionTitleProps = {
    subititle: string;
    title: string;
}

export function SectionTitle ({subititle, title}: SectionTitleProps) {
    return (
        <div>

            <h2>
                {title}
            </h2>

            <span>
                {subititle}
            </span>
        </div>
    )
}