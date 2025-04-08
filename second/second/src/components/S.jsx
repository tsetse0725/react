import {T} from "@/components/T"

export const S = (props) => {
    return (
        <div>
            <T gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};