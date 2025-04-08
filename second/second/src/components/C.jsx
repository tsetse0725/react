import {D} from "@/components/D"

export const C = (props) => {
    return (
        <div>
            <D gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};