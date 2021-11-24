export const yuv2rgb = (y:number, u:number|string, v:number|string, u_max:number, v_max:number) => {
    u=parseInt(u.toString())
    v=parseInt(v.toString())
    u = u / u_max * (255-16) + 16;
    v = v / v_max * (255-16)+ 16;
    let r = clamp(Math.floor(y + 1.4075 * (v - 128)), 0, 255);
    let g = clamp(Math.floor(y - 0.3455 * (u - 128) - 0.7169 * (v - 128)), 0, 255);
    let b = clamp(Math.floor(y + 1.779 * (u - 128)), 0, 255);
    return rgb2hex(r,g,b)
}

function clamp(n:number, low:number, high:number) {
    if (n < low) return low;
    if (n > high) return high;
    return n;
}

const rgb2hex = (r:number, g:number, b:number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}