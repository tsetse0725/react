import {N} from "@/components/N"

export const M = (props) => {
    return (
        <div>
            <N gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};