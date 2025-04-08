import {M} from "@/components/M"

export const L = (props) => {
    return (
        <div>
            <M gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};