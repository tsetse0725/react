import {V} from "@/components/V"

export const U = (props) => {
    return (
        <div>
            <V gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};