import * as React from "react";
import { Label } from "@fluentui/react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./styles.css";

export interface IBodyProps {
  name?: string;
  value?: string;
  defaultValue?: any;
  rawValue?: any;
  logic?: string;
  conditionValue?: any;
  trueColor?: string;
  trueBackgroundColor?: string;
  defaultColor?: string;
  defaultBackgroundColor?: string;
  defaultIconAppendName?: string;
  defaultIconAppendColor?: string;
  defaultIconAppendAnimation?: string;
  trueIconAppendName?: string;
  trueIconAppendColor?: string;
  trueIconAppendAnimation?: string;
  trueIconPrependName?: string;
  trueIconPrependColor?: string;
  trueIconPrependAnimation?: string;
  defaultIconPrependName?: string;
  defaultIconPrependColor?: string;
  defaultIconPrependAnimation?: string;
}

export class Body extends React.Component<IBodyProps> {
  public render(): React.ReactNode {
    //initialize all vairiables needed
    const props = this.props;
    const arrayValue = props.conditionValue?.toString()
      ? props.conditionValue.toString().split(";")
      : [];
    const arrayColor = props.trueColor?.toString()
      ? props.trueColor?.toString().split(";")
      : [];
    const arrayBackgroundColor = props.trueBackgroundColor?.toString()
      ? props.trueBackgroundColor?.toString().split(";")
      : [];
    const arrayIconAppendName = props.trueIconAppendName?.toString()
      ? props.trueIconAppendName?.toString().split(";")
      : [];
    const arrayIconAppendColor = props.trueIconAppendColor?.toString()
      ? props.trueIconAppendColor?.toString().split(";")
      : [];
    const arrayIconAppendAnimation = props.trueIconAppendAnimation?.toString()
      ? props.trueIconAppendAnimation?.toString().split(";")
      : [];
    const arrayIconPrependName = props.trueIconPrependName?.toString()
      ? props.trueIconPrependName?.toString().split(";")
      : [];
    const arrayIconPrependColor = props.trueIconPrependColor?.toString()
      ? props.trueIconPrependColor?.toString().split(";")
      : [];
    const arrayIconPrependAnimation = props.trueIconPrependAnimation?.toString()
      ? props.trueIconPrependAnimation?.toString().split(";")
      : [];

    let customStyle = {
      backgroundColor: props.defaultBackgroundColor,
      color: props.defaultColor,
      paddingRight: "3px",
      paddingLeft: "3px",
      iconAppendName: props.defaultIconAppendName,
      iconAppendColor: props.defaultIconAppendColor,
      iconAppendAnimation: props.defaultIconAppendAnimation,
      iconPrependName: props.defaultIconPrependName,
      iconPrependColor: props.defaultIconPrependColor,
      iconPrependAnimation: props.defaultIconPrependAnimation,
    };

    if (props.value != null && arrayValue.length) {
      console.log(props.value)
      switch (props.logic) {
        case "0": //Range
          if (props.value != "") {
            arrayValue.every((arr: any, index: any) => {
              let currentArrayVal = arr.split("~");
              if (currentArrayVal.length <= 1) {
                customStyle.backgroundColor = props.defaultBackgroundColor;
                customStyle.color = props.defaultColor;
                return false;
              }
              if (
                props.rawValue >=
                  Number(currentArrayVal[0] || props.rawValue) &&
                props.rawValue <= Number(currentArrayVal[1] || props.rawValue)
              ) {
                if (arrayBackgroundColor.length >= index + 1)
                  customStyle.backgroundColor = arrayBackgroundColor[index];
                if (arrayColor.length >= index + 1)
                  customStyle.color = arrayColor[index];
                if (arrayIconAppendName.length >= index + 1)
                  customStyle.iconAppendName = arrayIconAppendName[index];
                if (arrayIconAppendColor.length >= index + 1)
                  customStyle.iconAppendColor = arrayIconAppendColor[index];
                if (arrayIconAppendAnimation.length >= index + 1)
                  customStyle.iconAppendAnimation =
                    arrayIconAppendAnimation[index];
                if (arrayIconPrependName.length >= index + 1)
                  customStyle.iconPrependName = arrayIconPrependName[index];
                if (arrayIconPrependColor.length >= index + 1)
                  customStyle.iconPrependColor = arrayIconPrependColor[index];
                if (arrayIconPrependAnimation.length >= index + 1)
                  customStyle.iconPrependAnimation =
                    arrayIconPrependAnimation[index];
              }

              return true;
            });
          }
          break;

        case "1": //Equal
          arrayValue.every((arr: any, index: any) => {
            if (props.rawValue == arr) {
              if (arrayBackgroundColor.length >= index + 1)
                customStyle.backgroundColor = arrayBackgroundColor[index];
              if (arrayColor.length >= index + 1)
                customStyle.color = arrayColor[index];
              if (arrayIconAppendName.length >= index + 1)
                customStyle.iconAppendName = arrayIconAppendName[index];
              if (arrayIconAppendColor.length >= index + 1)
                customStyle.iconAppendColor = arrayIconAppendColor[index];
              if (arrayIconAppendAnimation.length >= index + 1)
                customStyle.iconAppendAnimation =
                  arrayIconAppendAnimation[index];
              if (arrayIconPrependName.length >= index + 1)
                customStyle.iconPrependName = arrayIconPrependName[index];
              if (arrayIconPrependColor.length >= index + 1)
                customStyle.iconPrependColor = arrayIconPrependColor[index];
              if (arrayIconPrependAnimation.length >= index + 1)
                customStyle.iconPrependAnimation =
                  arrayIconPrependAnimation[index];
            }

            return true;
          });
          break;

        case "2": //Contain
          arrayValue.every((arr: any, index: any) => {
            if (props.rawValue.includes(arr)) {
              if (arrayBackgroundColor.length >= index + 1)
                customStyle.backgroundColor = arrayBackgroundColor[index];
              if (arrayColor.length >= index + 1)
                customStyle.color = arrayColor[index];
              if (arrayIconAppendName.length >= index + 1)
                customStyle.iconAppendName = arrayIconAppendName[index];
              if (arrayIconAppendColor.length >= index + 1)
                customStyle.iconAppendColor = arrayIconAppendColor[index];
              if (arrayIconAppendAnimation.length >= index + 1)
                customStyle.iconAppendAnimation =
                  arrayIconAppendAnimation[index];
              if (arrayIconPrependName.length >= index + 1)
                customStyle.iconPrependName = arrayIconPrependName[index];
              if (arrayIconPrependColor.length >= index + 1)
                customStyle.iconPrependColor = arrayIconPrependColor[index];
              if (arrayIconPrependAnimation.length >= index + 1)
                customStyle.iconPrependAnimation =
                  arrayIconPrependAnimation[index];
            }

            return true;
          });
          break;
      }
    }
    return (
      <div
        style={{
          display: "inline-flex",
          verticalAlign: "middle",
          alignItems: "center",
        }}
      >
        <Icon
          iconName={customStyle.iconPrependName}
          style={{ color: customStyle.iconPrependColor }}
          className={customStyle.iconPrependAnimation}
        />
        <Label style={customStyle}>{props.value || props.defaultValue}</Label>
        <Icon
          iconName={customStyle.iconAppendName}
          style={{ color: customStyle.iconAppendColor }}
          className={customStyle.iconAppendAnimation}
        />
      </div>
    );
  }
}
