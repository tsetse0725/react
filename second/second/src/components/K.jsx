import {L} from "@/components/L"

export const K = (props) => {
    return (
        <div>
            <L gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};