const baseSize = [250, 200];

function widgetSizeScale(size: number) {
    return 1 + (size - 1) * 0.3;
}

export function widgetBodyWidth(size: number) {
    return widgetSizeScale(size) * baseSize[0];
}

export function widgetBodyHeight(size: number) {
    return widgetSizeScale(size) * baseSize[1];
}
