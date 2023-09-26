import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { Body, IBodyProps } from "./Body";
import * as React from "react";

export class SpiritField implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    context: ComponentFramework.Context<IInputs>;
    /**
     * Empty constructor.
     */
    constructor() { }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.context = context;
        this.notifyOutputChanged = notifyOutputChanged;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        console.log('controlValue in index.ts', this.context.parameters.controlValue);
        const props: IBodyProps = {
            value: this.context.parameters.controlValue.formatted?.toString(),
            defaultValue: this.context.parameters.defaultValue.raw,
            rawValue: this.context.parameters.controlValue.raw,
            conditionValue: this.context.parameters.conditionValue.raw,
            logic: this.context.parameters.Logic.raw,
            trueBackgroundColor: this.context.parameters.trueBackgroundColor.raw?.toString(),
            trueColor: this.context.parameters.trueColor.raw?.toString(),
            defaultBackgroundColor: this.context.parameters.defaultBackgroundColor.raw?.toString(),
            defaultColor: this.context.parameters.defaultColor.raw?.toString(),
            trueIconAppendName: this.context.parameters.trueIconAppendName.raw?.toString(),
            trueIconAppendColor: this.context.parameters.trueIconAppendColor.raw?.toString(),
            trueIconAppendAnimation: this.context.parameters.trueIconAppendAnimation.raw?.toString(),
            trueIconPrependName: this.context.parameters.trueIconPrependName.raw?.toString(),
            trueIconPrependColor: this.context.parameters.trueIconPrependColor.raw?.toString(),
            trueIconPrependAnimation: this.context.parameters.trueIconPrependAnimation.raw?.toString(),
            defaultIconAppendName: this.context.parameters.defaultIconAppendName.raw?.toString(),
            defaultIconAppendColor: this.context.parameters.defaultIconAppendColor.raw?.toString(),
            defaultIconAppendAnimation: this.context.parameters.defaultIconAppendAnimation.raw?.toString(),
            defaultIconPrependName: this.context.parameters.defaultIconPrependName.raw?.toString(),
            defaultIconPrependColor: this.context.parameters.defaultIconPrependColor.raw?.toString(),
            defaultIconPrependAnimation: this.context.parameters.defaultIconPrependAnimation.raw?.toString()
        };
        return React.createElement(
            Body, props
        );
    }



    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs {
        console.log('output:', this.context)
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
