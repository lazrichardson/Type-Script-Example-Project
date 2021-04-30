// An interface in TypeScript describes the 
// 'shape' of an object that implements this
// interface.
//
// Another way of describing interfaces is that
// they define the contract of objects that will
// use this interface.

export interface Person {

    /** Every record will be tracked by our Id.
     *
     * (The easiest way to remember whether to use
     *  readonly or const is to ask whether you’re using
     *  it on a variable or a property.
     *
     *  Variables use const whereas properties use readonly) */
    readonly personId: string;

    /** Every person has a first name that
     *  may have many tokens or names, like
     *  Mary Jane or Elizabeth Mary. */
    firstName: string;

    /** A last name may contact hypens, like
     *  Elizabeth Mary Grimes-Hatfield.  */
    lastName: string;

    /**
     * Optional: nickname
     *
     * (Optional properties are written with a '?'
     *  at the end of the property name.)
     */
    nickName?: string;

    /**
     * Pprint
     *
     * (prints out the values of the object)
     */
    prettyPrint: () => (string);

}