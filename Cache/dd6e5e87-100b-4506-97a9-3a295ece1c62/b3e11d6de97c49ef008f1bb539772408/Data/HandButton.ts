import { PinchButton } from ".?SpectaclesInteractionKit/Components/UI/PinchButton/PinchButton";
import TrackedHand from "./SpectaclesINteractionKit/Providers/HandInputData/TrackedHand";
import { SIK } from "./SpectaclesInteractionKit/SIK";

@component
export class HandButton extends BaseScriptComponent {
    @input
    private button: PinchButton
    private leftHand: TrackedHand = SIK.HandInputData.getHand("left");
    
    onAwake(){
        this.createEvent("OnStartEvent").bind(this.onStart.bind(this));
        this.createEvent("UpdateEvent").bind(this.update.bind(this));
    }
    
    private update(){
        
    }
    
    private onStart(){
        // Show the button when the left hand is seen
        this.leftHand.onHandFound.add(() =>{
            this.button.sceneObject.enabled = true; 
        });
        
        // Hide the button when the left hand is not seen
        this.leftHand.onHandLost.add(() =>{
            
        });
        
        
    }
}
