const HashLess = (evt: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    evt.preventDefault();

    const targetLink = document.querySelector(`#${id}`);

    if (targetLink) {
        targetLink.scrollIntoView({
            behavior: "smooth",
            // block: "start"
        });
    };
};

export default HashLess;