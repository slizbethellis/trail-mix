var customer;
var verbiage1;
var verbiage2;
var verbiage3;
var verbiage4;
var verbiage5;


var storyLine = [
	{
		story: `It is the first day of June, 2013, you push through giant square doors with the clanging of the school bell in your ear. You victoriously emerge to the clear blue sky as another year of chalkboards, notebooks, and gym class has come to end.  There is only one way to celebrate this momentous occasion, a ${verbiage1} from ${customer}!  You rush to your bike with excitement, hopping on and kicking the pedals into gear while rolling straight for the Brushy Bush Trail.  Just before you start your journey into the hollow, you happen to glance down and notice a very strange box.  You walk to the box and push away the leaves to find it covered with a strange writing that you&apos;ve never seen before.  It was at that moment a bullfrog-like grumble roiled in your stomach...`

	},
	{
		story: "You get back on your bike and start riding down the trail, the schoolyard noises slowly dissipating into the background as the shadowy cover of the maples encourage the feelings of adventure to creep in.  As your imagination turns your bike into a hover ship, sailing through the forests of an alien planet in galaxy far away, you approach the raging river of lava called Tom&apos;s Creek.  As you squint your eyes, your mainframe calculates the possible routes to cross the wet inferno and spits back two options.  The bike ramp you and Bobby Jenkins forged in the 4th grade, or the mossy log that stretches across the abyss."
	},
	{
		story: "As you continue on down the trail you watch and listen to a duo of squirrels occasionally squawking at each other while playing ring around the pine tree.  Up ahead you spot the strawberry bushes blooming with what you and your buddies have dubbed &ldquo;Nature&apos;s Pez&rdquo;.  You think about how nice a small appetizer might be when you spot a small bobcat trotting along the side of the path.  Your mind swirls with indecision; you love strawberries, but you have never seen a bobcat before..."
	},
	{
		story:  `As you round the next bend, you see the last leg of the forest.  Up ahead lies the fabled Wolfman Jack cave, the rumored home of your favorite campfire story, and your final destination ${customer}. Nearby is a truck spinning its wheels in a mud hole.  After about three 360&apos;s, the truck slides to a stop as the tires dig itself into a rut.  &ldquo;Must be some of the high-schoolers drinking soda pop in the woods&rdquo; you say as you wonder if you should try and help.`

	},
	{
		story: `As you break into the clearing panting and wheezing, you see the ${customer} sign just peeking over the tree line in the distance.  Maybe the smell of ${verbiage4} will distract the creature long enough for you to make your escape.  Just at that moment, you hear the snap and crack of sticks behind you.  You turn to see Wolfman Jack emerge from the forest.  Sensing him closing in, you veer left towards a hollow log just big enough to hide in.  You dive in and situate yourself in the middle as you hear his snarl on the other side of the bark.  You realize that you are now off the ground, being heaved into the air and your momentary weightlessness comes to an abrupt stop when you hit the ground.  The log breaks apart into a million pieces and you lay there staring at the ground, momentarily stunned as a looming shadow covers you in its darkness.  You turn to see red eyes as a glob of wolf slobber rolls off your cheek.  &ldquo;So, this is it huh?&rdquo; you say to yourself.`
	},
	{
		story: `You come bursting through the doors of ${customer}, clothes covered in mud and hair slicked back by wolf spit.  You rush to the counter,  &ldquo;Can I get a ${verbiage1} with a ${verbiage2} and a ${verbiage5} pronto!&rdquo;  then quickly add &ldquo;You know what?  Make that two of each!&rdquo;  You pay the cashier and take your ticket with the number 52 and spot your two buddies, Aaron and Sean sitting at a table across the room.   &ldquo;You look like you've seen a ghost&rdquo; Aaron says as you take a seat.  &ldquo;More like a wolf!&rdquo; you reply.  &ldquo;A wolf!&rdquo; exclaimed Sean, &ldquo;You should see my sister every morning!  She&apos;d turn a wolf to stone!&rdquo;  You all chuckle with laughter as you raise one eyebrow and lean forward with your elbows square on the table, &ldquo;You&apos;re not going to believe what happened to me today!&rdquo; you whisper.   Just then the cashier yells out &ldquo;Number 52... Number 52 your order is ready.&rdquo;`


	}
];

var choiceAnswers = [
	{
		A: 'You open the latch to reveal an ancient artifact resembling the old Wolfman Jack cave. It has dozens of rubies and gems inserted around the edges with one central diamond that appears to emit a faint glow from its middle.  You exclaim &ldquo;Woah Dude!&rdquo; and put the artifact in your pocket.',
		B: `After standing back up, you exclaim &ldquo;I don&apos;t have time play with toy chests! My ${verbiage1} awaits!&rdquo;`
	},
	{
		A: `You kick your pedals into overdrive, gaining the velocity of 1,000 rocket boosters, enabling you to peer at the scene below while crossing the stream of fire.  While landing you absorb the impact and roll away yelling &ldquo; ${customer} here I come!&rdquo;`,
		B: `The memory of the distinct taste of dirt that filled your mouth the last time you played Evel Knievel causes you to steer toward the mossy log.  You pick up your bike and step onto the log.  As you take 1 step...2 steps...3...WHOOOPS!  You slip on a piece of slime and plunge into the fire below.  Upon impact, the visions of alien worlds and lava streams recede as you find yourself soaking wet, lying in the creek.  As you drip your way out of the water and find your bike and pull the kickstand out of the mud, you remind yourself that at ${verbiage2} awaits and keep riding down the path.`
	},
	{
		A:'Despite the coolness factor of the bobcat, there are enough YouTube videos to watch bobcats for days.  You cannot, however, web search that delicious strawberry flavor into your mouth.  You climb to the edge of the bushes and reach for a berry when you hear a slithery hiss and rattle just in front of you.  A snake the size of a fireman’s hose is flicking its black tongue and shaking its tail, waiting for your next move.',
		B: 'Despite your desire for fresh strawberries, you decide you absolutely cannot miss your chance to see a real bobcat.  Unfortunately, before you even realize, the bobcat disappears!  &ldquo;Oh no!! Come back!!&rdquo; you exclaim as you pump your pedals as fast as you can, streamlining down the path in desperation for that one glance, unaware of the large log protruding onto the path.  You slam tire first into it and get flung into the air as your bike goes vertical and you land with a thud.  As you get up and wipe yourself clean; the bobcat is nowhere to be found.  You shrug your shoulders and mutter &ldquo;bummer dude,&rdquo; as you hop back on your bike and keep riding.',
		C: 'Unfazed, you decide to pick up a large rock and hurl it at the snake, wildly missing the target. The snake immediately starts slithering towards you; its head upright in a striking position.  You turn and run only to make it a few feet before you trip over a large root sticking out of the ground.  You tuck and roll straight back to your feet, taking four long strides to reach your bike and speed away thinking &ldquo;so this is why I didn’t make the baseball team!&rdquo;.',
		D: `The sound of the rattle reminds you about your Uncle Junior getting bitten in the behind and the hospital trip that ensued.  You decide that you are in no mood to sit on a inflatable donut and slowly sneak away, leaving the snake and strawberries behind.  &ldquo;Thankfully&rdquo;, you think to yourself, &ldquo; ${customer} has a ${verbiage3} to satisfy my sweet tooth!&rdquo;`
	},
	{
		A: "After seeing the two clowns yelling at each other in the mud, you decide it wouldn" + "'" + "t be in your best interest to help.  You turn and make your way to the cave just ahead thinking about the stories that have shrouded the cave in mystery for nearly fifty years.  As the story goes, old farmer Jack was chased by a strange, red eyed wolf into the heart of the cave, never to be seen again.  Legend also has it from that point on, the creature named Wolfman Jack  was said to be spotted from time to time snacking on naughty children like popcorn.  You ride past the opening of the cave, as you shout, &ldquo;Wolfmen are wimps!&rdquo; with such bravado that it would make any school yard bully think twice.  As you continue on a few yards you hear low growl exclaim, &ldquo;WHO SAID THAT?&rdquo;  You turn and see the one and only Wolfman Jack, half wolf and half man, glancing around looking for the one responsible for disturbing his slumber.",
		B: `You approach the two men with caution, considering you shouldn&apos;t show up at ${customer} covered in mud, and say &ldquo;Hi, my name is Doug&rdquo;.  The driver replies &ldquo;Hi, my name&apos;s Tub and this here is Chub.  We were just doing ourselves some muddin&apos; and we done got stuck... Do... ya mind giving us a hand?&rdquo;  &ldquo;Sure! I&apos;ve earned five merit badges and I&apos;m working on my sixth.&rdquo; you exclaim.  &ldquo;Um.. Sure.. Just get in the truck and tromp the gas while we push in the back&rdquo; replied Tub.  Excitedly you hop in the front seat, put your foot on the brake, and slide it into drive.  You hear Tub scream, &ldquo;GO GO GO!&rdquo; as you slam the pedal down.  The engine roars and the tires spin, and you notice a dark streak appear out of nowhere, tackling the two men behind you.  In the process it bumps the back of the truck and the machine surprisingly pulls itself out of the mud hole, running into the tree in front of it.  You climb out of the truck and slip on the running board, tumbling to the ground into a pile of muddy leaves.  As you stand back up you realize that the brown streak was a half wolf half man standing over the two men.  It was the real Wolfman Jack!  You remind yourself of his legendary hunger for small children and take off running for the clearing up ahead.`,
		C: `As you turn, you see the thickest bush of mountain laurel you&apos;ve ever seen in your life and decide to dive right in.  You hear the folks from the truck yell &ldquo;Dag nabit Chub, I said drive, not reverse! Drive!!&rdquo;  You notice that Wolfman Jack&apos;s attention was now turned on the stranded hillbillies.  As the creature starts moving in the direction of the noise, you take off in a full sprint for the clearing just ahead, leaving your bike behind.`,
		D: 'Panic overtakes you and you start running into a full sprint, trying desperately to put distance between you and the creature.  You glance back to see the red eyed gaze turn towards you.  You turn around just in time to get clotheslined by a branch!  Your legs fly up in the air as you fall down on your back.  You gain your composure and roll to your feet, seeing Wolfman Jack in hot pursuit.  You turn and beeline it for the clearing up ahead.'
	},
	{
		false: 'You rummage through your pockets and come up empty. &ldquo;If only I had that strange artifact&rdquo; you say to yourself, &ldquo;I bet that would make this monster go away.&rdquo;  After half way committing to putting your hands up in defense, Wolfman Jack stands upright staring down at you then rears his head back to let out a ghastly howl.  Taking one last glance at the sky above, you are grabbed by the leg and dragged helplessly back to the cave.  Leaving only the crows sitting in the trees, cawing away.  The End.  You lose...',
		true: `It was at that moment, you feel your leg begin to heat up and you look down at the bulge in your pocket.  &ldquo;The artifact!&rdquo; you say to yourself as you reach in and wrap your fingers around the object.  You pull it out and it is now shining as bright as a star.  In an instant, the light seems to stream out of the object like an outreaching hand and completely cover the monster.  As you expect the worse, you hear the whimper of a small dog.  You open your eyes to see your neighbor&apos;s missing pug, Mr. Jinks.  It looks at you quizzically and lets out a small bark as it takes off back into the woods towards your neighborhood.  &ldquo;Now I&apos;m really confused&rdquo; you say to yourself as you stand back up and continue on to ${customer}.`
	}
];

var choices = [
	{
		A: 'Appease your curiosity and look inside?',
		B: 'Appease your hunger and leave?'
	},
	{
		A: 'The bike ramp?',
		B: 'The mossy log?'
	},
	{
		A: 'Eat strawberries?',
		B: 'Check out the bobcat?',
		C: 'Throw a rock at it?',
		D: 'Slowly walk backwards and sneak away?'
	},
	{
		A: 'Forget the truck and keep riding to the Wolfman Jack Cave?',
		B: 'Help the people in the truck?',
		C: 'Hide in the bushes?',
		D: 'Run?'
	}
];

var left = ["/assets/img/school.jpg","/assets/img/biker-on-ramp.png","/assets/img/strawberry2.png","/assets/img/cave.png","/assets/img/clearing.png"];
var right =  ["/assets/img/treasure-chest.png","/assets/img/mossy-log.png","/assets/img/bobcat2.png","/assets/img/truck.png","/assets/img/werewolf.png"];



var num = 0;
var artifact = false;
var recieved = false;
var lost = false;
var img = "<img src='/assets/img/artifact.png'>"



$("#try-again").hide();
$("#continue").hide();
$("#finish").hide();
$("#end").hide();
$("#collect").hide();

$("#display").html(storyLine[0].story);
$("#left").attr("src", left[0]);
$("#right").attr("src", right[0]);

 $("#choice1").html(choices[0].A).val(choices[0].A);
 $("#choice2").html(choices[0].B).val(choices[0].B);


 $("#submit").on("click", function(){
 	var choice = $("#choice").val().trim();
 	var choice1 = $("#choice1").val().trim();
 	var choice2 = $("#choice2").val().trim();

 	var artifactPossesion = function(){
		if(choice === choices[0].A){
			artifact = true;
			alert("You've recieved the Artifact!");
		}else if(choice === choices[0].B){
			lost = true;
		}else if (choice === choices[1].B){
			artifact = false;
			if(lost === false){
				alert("You lost the Artifact!");
			}
			lost = true;
		}else if (choice === choices[2].B){
			artifact = false;
			if(lost === false){
				alert("You lost the Artifact!");
			}
			lost = true;
		}else if (choice === choices[2].C){
			artifact = false;
			if(lost === false){
				alert("You lost the Artifact!");
			}
			lost = true;
		}else if (choice === choices[3].B){
			artifact = false;
			if(lost === false){
				alert("You lost the Artifact!");
			}
			lost = true;
		}else if (choice === choices[3].D){
			artifact = false;
			if(lost === false){
				alert("You lost the Artifact!");
			}
			lost = true;
		}
	}


 	for (var i = 0; i < choices.length; i++) {
 		if(choice === choices[i].A){
 			$("#display").html(choiceAnswers[i].A);
 		}else if(choice === choices[i].B){
 			$("#display").html(choiceAnswers[i].B);
 		}else if(choice === choices[i].C){
 			$("#display").html(choiceAnswers[i].C)
 		}else if(choice === choices[i].D){
 			$("#display").html(choiceAnswers[i].D)
 		}
 	};

 	$("#choiceButton").hide();
 	$("#continue").show();

 	if(choice === choices[2].A){
 		$("#choiceButton").show();
 		$("#continue").hide();
 		$("#display").html(choiceAnswers[2].A)
 		$("#choice1").html(choices[2].C).val(choices[2].C);
 		$("#choice2").html(choices[2].D).val(choices[2].D);
 		$("#left").attr("src", "/assets/img/strawberry-patch.png");
 		$("#right").attr("src", "/assets/img/snake-strawberry.png");
 		num --;
 	}else if(choice === choices[3].A){
 		$("#choiceButton").show();
 		$("#continue").hide();
 		$("#display").html(choiceAnswers[3].A)
 		$("#choice1").html(choices[3].C).val(choices[3].C);
 		$("#choice2").html(choices[3].D).val(choices[3].D);
 		$("#right").attr("src", "/assets/img/werewolf.png");
 		num --;
 	}

 	artifactPossesion();


 	num ++;
 });

 $("#continue").on("click", function(){
 	$("#choice1").html("").val("");
 	$("#choice2").html("").val("");
 	$("#continue").hide();
 	$("#choiceButton").show();

 	if(storyLine[num].story === storyLine[4].story){
		$("#choiceButton").hide();
		$("#finish").show()
		$("#left").attr("src", left[4]);
 	$("#right").attr("src", right[4]);
 	}

 	$("#display").html(storyLine[num].story);
 	$("#choice1").html(choices[num].A).val(choices[num].A);
 	$("#choice2").html(choices[num].B).val(choices[num].B);
 	$("#left").attr("src", left[num]);
 	$("#right").attr("src", right[num]);



 })

 $("#finish").on("click", function(){
 	if(artifact === false){
 		$("#display").html(choiceAnswers[4].false);
 		$("#finish").hide();
		$("#try-again").show();
 		$("#left").attr("src", "/assets/img/loser-hand.png");
 		$("#right").attr("src", "/assets/img/loser-lisa.png");

 	}else{
 		$("#display").html(choiceAnswers[4].true);
 		$("#continue").hide();
 		$("#end").show();
 		$("#finish").hide();
 		$("#left").attr("src", "/assets/img/bushes.png");
 		$("#right").attr("src", "/assets/img/pug.jpg");


 	}
 });

 $("#end").on("click", function(){
 	$("#display").html(storyLine[5].story);
 	$("#end").hide();
 	$("#collect").show()
 	$("#left").attr("src", "/assets/img/mcdonalds-cashier.jpg");
 	$("#right").attr("src", "/assets/img/2boys.jpg");
 });

 $("#collect").on("click", function(){
 	var html = "<h2>Congratulations!! You win a coupon for a cheeseburger</h2>";
 	html += '<img src="/assets/img/cheeseburger_1.jpg">';
 	$("#display").html(html);
 	$("#collect").hide();
 	$("#left").hide();
 	$("#right").hide();
});

$("#try-again").on("click", function(){
	$("#choiceButton").show();
	$("#choice1").show();
	$("#choice2").show();
	$("#submit").show();
	num = 0;
	artifact = false;
	recieved = false;
	lost = false;

	$("#try-again").hide();
	$("#continue").hide();
	$("#finish").hide();
	$("#end").hide();
	$("#collect").hide();





	$("#display").html(storyLine[0].story);
	$("#left").attr("src", left[0]);
	$("#right").attr("src", right[0]);

	 $("#choice1").html(choices[0].A).val(choices[0].A);
	 $("#choice2").html(choices[0].B).val(choices[0].B);


});
