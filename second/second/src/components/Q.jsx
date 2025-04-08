import {R} from "@/components/R"

export const Q = (props) => {
    return (
        <div>
            <R gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};