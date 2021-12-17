<template>
    <div class="container flex flex-col px-6">
        <div class="flex flex-row"><!-- add background image + bottom fadeout color -->
            <!-- align items below to the left  -->
            <div>
                <div>[Food Name]</div>
                <div>[Description]</div>
            </div>
        </div>

        <div><!-- card component -->
            <div>Buy Ingredients:</div>
            <div>
                <div>[Dot]</div>
                <div>
                    <div>[Ingredient Name]</div>
                    <div>[description]</div>
                </div>
                <div>[Price]</div>
            </div>
            <div>
                <div>[Dot]</div>
                <div>
                    <div>[Ingredient Name]</div>
                    <div>[description]</div>
                </div>
                <div>[Price]</div>
            </div>
            <div>
                <div>[Dot]</div>
                <div>
                    <div>[Ingredient Name]</div>
                    <div>[description]</div>
                </div>
                <div>[Price]</div>
            </div>
            <div>
                <div>[Dot]</div>
                <div>
                    <div>[Ingredient Name]</div>
                    <div>[description]</div>
                </div>
                <div>[Price]</div>
            </div>
            <div>
                <div>[Dot]</div>
                <div>
                    <div>[Ingredient Name]</div>
                    <div>[description]</div>
                </div>
                <div>[Price]</div>
            </div>
            <hr>
            <div>
                <div>Total:</div>
                <div>[Total Price]</div>
            </div>
        </div>
        <div> <!-- card component -->
            <div>Payment:</div>
            <div>
                <b-row>
                    <b-col>[Button]</b-col>
                    <b-col>[Button]</b-col>
                    <b-col>[Button]</b-col>
                </b-row>
            </div>
            <div> <!-- card component -->
                <div>
                    Name on card
                    [Input]
                </div>
                <div>
                    Card Number
                    [Input]
                </div>
                <div>
                    <b-row>
                        <b-col>
                            <div>
                                Month
                                [Input]
                            </div>
                        </b-col>
                        <b-col>
                            <div>
                                Year
                                [Input]
                            </div>
                        </b-col>
                        <b-col>
                            <div>
                                CVV
                                [Input]
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <div>[Submit Button]</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>