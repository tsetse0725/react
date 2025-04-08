import {S} from "@/components/S"

export const R = (props) => {
    return (
        <div>
            <S gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};