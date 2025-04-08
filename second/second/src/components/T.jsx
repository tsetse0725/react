import {U} from "@/components/U"

export const T = (props) => {
    return (
        <div>
            <U gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};