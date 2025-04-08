import {Q} from "@/components/Q"

export const P = (props) => {
    return (
        <div>
            <Q gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};