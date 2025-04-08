import {P} from "@/components/P"

export const O = (props) => {
    return (
        <div>
            <P gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};