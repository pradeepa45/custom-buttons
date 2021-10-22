import React from 'react';


function Button({ variant, startIcon, endIcon, size, color, content, disabled, disableShadow }) {
    var varStyle = variant ? variant : 'default';
    var sizeStye = size ? size : 'md';
    var colorStyle = color ? color : null;
    var disableStyle = disabled ? disabled : null;
    var shadowStyle = disableShadow ? 'disableShadow' : null;
    return (
        <div className="item">

            <button className={`${varStyle} ${sizeStye} ${colorStyle} ${disableStyle} ${shadowStyle}`} disabled={disabled}>
                {startIcon && (
                    <span className="material-icons md-dark">{startIcon}</span>
                )}
                {content}
                {endIcon && (
                    <span className="material-icons md-dark">{endIcon}</span>
                )}
            </button>

            {variant ? `variant = '${variant}'` : null}
            {size ? ` size = '${size}'` : null}
            {color ? ` color = '${color}'` : null}
            {disabled ? `disabled = true` : null}
            {disableShadow ? ' disableShadow' : null}
            {startIcon ? ` startIcon = '${startIcon}'` : null}
            {endIcon ? ` endIcon = '${endIcon}'` : null}
        </div>
    )
}

export default Button;