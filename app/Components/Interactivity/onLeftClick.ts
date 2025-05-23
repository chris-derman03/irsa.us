export const onLeftClick = (
    e: React.MouseEvent,
    callback: () => void
) => {
    if (
        e.button === 0 && // left click only
        !e.metaKey && // ignore Cmd-click
        !e.ctrlKey && // ignore Ctrl-click
        !e.shiftKey && // ignore Shift-click
        !e.altKey // ignore Alt-click
    ) {
        callback();
    }
}