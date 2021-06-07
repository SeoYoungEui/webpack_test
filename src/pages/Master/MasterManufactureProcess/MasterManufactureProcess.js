import { Popup, ResponsiveBox } from "devextreme-react";
import { Col, Item, Location, Row } from "devextreme-react/responsive-box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import ControlBox from "../../../components/ControlBox/ControlBox";
import SearchPanel from "../../../components/SearchPanel/SearchPanel";
import BomGrid from "./components/BomGrid";
import ManufactureProcessRevDialog from "./components/dialog/ManufactureProcessRevDialog";
import ItemGrid from "./components/ItemGrid";
import RouteGrid from "./components/RouteGrid";
import SearchRequirement from "./SearchRequirement";
import { masterManufactureAction, masterManufactureSelector } from "./slice";

const MasterManufactureProcess = () => {
    const dispatch = useDispatch();

    const { defaultParam } = useSelector(masterManufactureSelector.all);

    const [dlgState, setDlgState] = useState(false);
    const [dlgTitle, setDlgTitle] = useState("");

    useEffect(() => {
        dispatch(masterManufactureAction.load());
    }, [defaultParam])

    //검색
    const mainSearch = (searchParam) => {
        dispatch(
            masterManufactureAction.setDefaultParam({
                ...defaultParam,
                searchParam: searchParam,
            })
        );
    }

    //개정
    const mainRev = () => {
        setDlgState(true)
        setDlgTitle("제조공정정보 개정");
    }

    //수정
    const mainMod = () => {
        setDlgState(true)
        setDlgTitle("제조공정정보 수정");
    }

    //이력보기
    const mainRevLog = () => {

    }

    return (
        <div>
            <Popup
                visible={dlgState}
                onHiding={() => setDlgState(false)}
                container=".dx-viewport"
                closeOnOutsideClick={true}
                title={dlgTitle}
                width={1200}
                height={600}
            >
                <ManufactureProcessRevDialog></ManufactureProcessRevDialog>
            </Popup>
            <div>
                <SearchPanel
                    mainSearch={mainSearch}
                    list={SearchRequirement.getData()}
                >
                </SearchPanel>
                <ControlBox
                    mainRev={mainRev}
                    mainMod={mainMod}
                    mainRevLog={mainRevLog}
                ></ControlBox>
                <ResponsiveBox>
                    <Row></Row>
                    <Row></Row>
                    <Col></Col>
                    <Col></Col>
                    <Item>
                        <Location
                            row={0}
                            col={0}
                        >
                        </Location>
                        <ItemGrid></ItemGrid>
                    </Item>
                    <Item>
                        <Location
                            row={0}
                            col={1}
                        >
                        </Location>
                        <ResponsiveBox>
                            <Row></Row>
                            <Row></Row>
                            <Col></Col>

                            <Item>
                                <Location
                                    row={0}
                                    col={0}
                                >
                                </Location>
                                <RouteGrid></RouteGrid>
                            </Item>
                            <Item>
                                <Location
                                    row={1}
                                    col={0}
                                >
                                </Location>
                                <BomGrid></BomGrid>
                            </Item>
                        </ResponsiveBox>
                    </Item>

                </ResponsiveBox>
            </div>
        </div>
    )
}

export default MasterManufactureProcess