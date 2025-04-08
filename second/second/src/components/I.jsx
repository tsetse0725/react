import {J} from "@/components/J"

export const I = (props) => {
    return (
        <div>
            <J gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};