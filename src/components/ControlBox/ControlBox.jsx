import { Button } from "devextreme-react";
import Form, { SimpleItem } from "devextreme-react/form"
import './ControlBox.scss'

const ControlBox = (props) => {

    return (
        <div className="form-main">
            {props.mainRev !== undefined && (
                <div className="button">
                    <Button
                        width={100}
                        height={35}
                        text="개정"
                        type="default"
                        stylingMode="contained"
                        onClick={props.mainRev}
                    />
                </div>
            )}
            {props.mainMod !== undefined && (
                <div className="button">
                    <Button
                        width={100}
                        height={35}
                        text="수정"
                        type="default"
                        stylingMode="contained"
                        onClick={props.mainMod}
                    />
                </div>
            )}
            {props.mainRevLog !== undefined && (
                <div className="button">
                    <Button
                        width={100}
                        height={35}
                        text="이력보기"
                        type="default"
                        stylingMode="contained"
                        onClick={props.mainRevLog}
                    />
                </div>
            )}
        </div>
    )
}

export default ControlBox;