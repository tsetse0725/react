import {O} from "@/components/O"

export const N = (props) => {
    return (
        <div>
            <O gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};