import {X} from "@/components/X"

export const W = (props) => {
    return (
        <div>
            <X gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};