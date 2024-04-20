export const findCenterOf = (target, relativeTo) => {
    if (!relativeTo.contains(target)) {
        throw new Error("RelativeTo must contain target");
    }
    const targetBoundingRect = target.getBoundingClientRect();
    const relativeToBoundingRect = relativeTo.getBoundingClientRect();
    return {
        x: targetBoundingRect.left - relativeToBoundingRect.left + targetBoundingRect.width / 2,
        y: targetBoundingRect.top - relativeToBoundingRect.top + targetBoundingRect.height / 2,
    }
}