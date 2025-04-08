import {W} from "@/components/W"

export const V = (props) => {
    return (
        <div>
            <W gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};