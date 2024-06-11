import { RotatingLines } from 'react-loader-spinner';


export const RotatingLinesLoader = () => {

    return (
        <div className="col-span-4 flex items-center justify-center h-screen">
            <RotatingLines
                strokeColor="purple"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}