import {F} from "@/components/F"

export const E = (props) => {
    return (
        <div>
            <F gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};