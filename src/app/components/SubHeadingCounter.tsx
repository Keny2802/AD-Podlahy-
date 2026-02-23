import {
    Fragment
} from "react";
import clsx from "clsx";

import BodyText from "./BodyText";

type props = {
    className?: string;
    set: string[];
};

const SubHeadingCounter = (props: props) => {
    const {
        className,
        set
    } = props;

    const LENGTH_OF_SET = set.length;

    return (
        // Přečtěte si 10 důležitých informací o tomto voze.
        <Fragment>
            <BodyText className={clsx(className, "sub-heading-counter-component")}>
                {
                LENGTH_OF_SET < 5 ?
                `Přečtěte si ${LENGTH_OF_SET} důlěžité informace o tomto voze.` :
                `Přečtěte si ${LENGTH_OF_SET} důlěžitých informací o tomto voze.`
                }
            </BodyText>
        </Fragment>
    );
};

export default SubHeadingCounter;