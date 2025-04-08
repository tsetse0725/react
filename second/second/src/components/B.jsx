import {C} from "@/components/C"

export const B = (props) => {
    return (
        <div>
            <C gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};