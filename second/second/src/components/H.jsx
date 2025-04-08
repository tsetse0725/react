import {I} from "@/components/I"

export const H = (props) => {
    return (
        <div>
            <I gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};