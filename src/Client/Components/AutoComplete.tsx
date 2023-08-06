import Roact, {FunctionComponent} from "@rbxts/roact";
import ZirconIcon, {IconEnum} from "@/Client/Components/Icon";
import {ZirconItemCompletion, ZirconType} from "@/Class/ZirconItemCompletion";

interface AutoCompleteProps {
    items: Array<ZirconItemCompletion>;
    onItemSelect?: (item: string) => void;
    onItemHover?: (item: string) => void;

    visible: boolean;
    position: Vector2;
}

export const AutoComplete: FunctionComponent<AutoCompleteProps> = ({items, visible, position}) => {

    const getIconByType = (zirconType: keyof ZirconType): IconEnum => {
        const icon: IconEnum = "TypeKeyword";
        switch (zirconType) {
            case "Class":
                return "TypeClass";
            case "Enum":
                return "TypeProperty";
            case "Function":
                return "TypeFunction";
            case "Namespace":
                return "TypeKeyword";
        }

        return icon;
    }

    return (
        <frame
            Size={new UDim2(0, 200, 0, 150)}
            BackgroundTransparency={.5}
            BackgroundColor3={Color3.fromRGB(0, 0, 0)}
            BorderSizePixel={0}
            Position={new UDim2(0, position.X, 0, position.Y)}
            AnchorPoint={new Vector2(0, 1)}
            Visible={visible}
        >
            <uicorner CornerRadius={new UDim(0, 5)}/>
            <scrollingframe
                Size={new UDim2(1, 0, 1, 0)}
                BackgroundTransparency={1}
                BorderSizePixel={0}
                AutomaticCanvasSize={Enum.AutomaticSize.Y}
                CanvasSize={new UDim2(0, 0, 0, items.size() * 30)}
                ScrollBarImageColor3={Color3.fromRGB(0, 0, 0)}
                ScrollBarThickness={3}
            >
                <uilistlayout
                    FillDirection={Enum.FillDirection.Vertical}
                    SortOrder={Enum.SortOrder.LayoutOrder}
                    Padding={new UDim(0, 0)}
                />
                {items.map((item) => {
                    return (
                        <frame
                            Size={new UDim2(1, 0, 0, 30)}
                            BackgroundTransparency={1}
                            BorderSizePixel={0}
                            LayoutOrder={items.indexOf(item)}
                            BackgroundColor3={Color3.fromRGB(0, 0, 0)}
                        >
                            <uilistlayout
                                FillDirection={Enum.FillDirection.Horizontal}
                                SortOrder={Enum.SortOrder.LayoutOrder}
                                Padding={new UDim(0, 10)}
                            />
                            <ZirconIcon Icon={getIconByType(item.Type)} Size={new UDim2(0, 30, 0, 30)}/>
                            <textlabel
                                Text={item.Name}
                                Size={new UDim2(1, 0, 1, 0)}
                                TextXAlignment="Left"
                                BackgroundTransparency={1}
                                BorderSizePixel={0}
                                TextColor3={Color3.fromRGB(255, 255, 255)}
                            />
                        </frame>
                    )
                })}
            </scrollingframe>
        </frame>
    )
}