import {H} from "@/components/H"

export const G = (props) => {
    return (
        <div>
            <H gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};