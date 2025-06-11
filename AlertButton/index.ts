import { IInputs, IOutputs } from "./generated/ManifestTypes";
import "./css/styles.css";

export class AlertButton implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _container: HTMLDivElement;
    private _inboxLink: HTMLAnchorElement;
    private _badgeSpan: HTMLSpanElement;
    private _inboxTextSpan: HTMLSpanElement; // New span for inbox text
    private _notifyOutputChanged: () => void;
    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this._container = container;
        this._notifyOutputChanged = notifyOutputChanged;

        this._inboxLink = document.createElement("a"); // Changed to anchor
        this._inboxLink.className = "notification";
        this._inboxLink.href = "#";
        this._inboxLink.addEventListener("click", this._onClick.bind(this));

        this._badgeSpan = document.createElement("span");
        this._badgeSpan.className = "badge";

        this._inboxTextSpan = document.createElement("span"); // Create inbox text span
        this._inboxTextSpan.className = "inbox-text"; // Add a class for styling if needed

        this._inboxLink.appendChild(this._badgeSpan);
        this._inboxLink.appendChild(this._inboxTextSpan); // Append inbox text span
        this._container.appendChild(this._inboxLink); // Changed to anchor
    }

    private _onClick(): void {
        this._notifyOutputChanged();
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
   public updateView(context: ComponentFramework.Context<IInputs>): void {
        const inboxText = context.parameters.inboxText.raw || "";
        const badgeCount = context.parameters.badgeCount.raw || 0;
        const buttonWidth = context.parameters.buttonWidth.raw || 150;
        const buttonHeight = context.parameters.buttonHeight.raw || 40;
        const buttonColor = context.parameters.buttonColor.raw || "#555555";
        const badgeColor = context.parameters.badgeColor.raw || "#FF0000";
        const inboxTextSize = context.parameters.inboxTextSize.raw || 16;
        const borderRadius = context.parameters.borderRadius.raw || 0; // Get border radius
        const textColor = context.parameters.textColor.raw || "#FFFFFF"; // Get text color, default to white

        this._inboxTextSpan.textContent = inboxText; // Set the inbox text
        this._badgeSpan.textContent = badgeCount.toString();

        this._inboxLink.style.width = buttonWidth + "px"; // Changed to anchor
        this._inboxLink.style.height = buttonHeight + "px"; // Changed to anchor
        this._inboxLink.style.backgroundColor = buttonColor; // Changed to anchor
        this._badgeSpan.style.backgroundColor = badgeColor;
        this._inboxLink.style.fontSize = inboxTextSize + "px"; // Changed to anchor
        this._inboxLink.style.borderRadius = borderRadius + "px"; // Set border radius // Changed to anchor
        this._inboxTextSpan.style.color = textColor; // Set text color
        //this._inboxLink.style.color = textColor; // Remove this line

        if (badgeCount > 0) {
            this._badgeSpan.classList.add("badge-animation");
        } else {
            this._badgeSpan.classList.remove("badge-animation");
        }
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
