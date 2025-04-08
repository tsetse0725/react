import {G} from "@/components/G"

export const F = (props) => {
    return (
        <div>
            <G gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};