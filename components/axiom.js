const axioms = [
  {
    title: "I think therefore it's not XGH.",
    description:
      "In XGH you don’t think, you do the first thing that comes to your mind. There’s not a second option as the first one is faster."
  },
  {
    title: "There are 3 ways of solving a problem.",
    description:
      "The right way, the wrong way and the XGH way; which is exactly like the first one but faster. XGH is faster than any development process you know (see Axiom 14)."
  },
  {
    title: "You’ll always need to do more and more XGH.",
    description:
      "For every bug solved using XGH, seven more are created. As all of them will be solved using XGH, then it's utility tends to the infinite."
  },
  {
    title: "XGH is completely reactive.",
    description: "Errors only come to exist when they appear."
  },
  {
    title: "In XGH anything goes.",
    description:
      "It solves the problem? It compiled? You commit and don't think about it anymore."
  },
  {
    title: "You commit always before updating.",
    description:
      "If things go wrong your part will always be correct... and your colleagues will be the ones dealing with the problems."
  },
  {
    title: "XGH don't have schedules.",
    description:
      "Schedules given to you by your clients are all but important. You will ALWAYS be able to implement EVERYTHING in time (even if that means accessing the DB through some crazy script)."
  },
  {
    title:
      "Be ready to jump off when the boat starts sinking. Or blame someone else.",
    description:
      "For people using XGH someday the boat sinks. As time passes by the system grows into a bigger monster. You better have your resume ready for when the thing comes down. Or have someone else to blame."
  },
  {
    title: "Be authentic. XGH don't follow patterns.",
    description:
      "Write code as you may want. If it solves the problem you must commit and forget about it."
  },
  {
    title: "There's no refactoring just rework.",
    description:
      "If things ever go wrong just use XGH to quickly solve the problem. Whenever the problem requires rewriting the whole software it's time for you to drop off before the whole thing goes down."
  },
  {
    title: "XGH is anarchic.",
    description:
      "There's no need for a project manager. There's no owner and everyone does whatever they want when the problems and requirements appear."
  },
  {
    title: "Always believe in improvement promises.",
    description:
      "Putting TODO comments in the code as a promise that the code will be improved later helps the XGH developer. He/She won't feel guilt for the shit he/she did. Sure there won't be no refactoring (see Axiom 10)."
  },
  {
    title: "XGH is absolute.",
    description:
      "Delivery dates and costs are absolute things. Quality is relative. Never think about quality but instead think about the minimum time required to implement a solution. Actually… don’t think! Do! (see Axiom 1)"
  },
  {
    title: "XGH is not a fad.",
    description:
      "Scrum, XP? Those are just trends. XGH developers don’t follow temporary trends. XGH always was, and always will be used by those who despise quality."
  },
  {
    title: "XGH is not always WOP (Workaround-oriented programming).",
    description:
      "Many WOP require smart thinking. XGH requires no thinking (see Axiom 1)."
  },
  {
    title: "Don't try to row against the tide.",
    description:
      "If your colleagues use XGH and you are the only sissy who wants to do things the right way then quit it! For any design pattern that you apply correctly your colleagues will generate 10 times more rotten code using XGH."
  },
  {
    title: "XGH is not dangerous until you see some order in it.",
    description:
      "This axiom is very complex but it says that a XGH project is always in chaos. Don't try to put order into XGH (see Axiom 16). It's useless and you'll spend a lot of precious time. This will make things go down even faster. Don't try to manage XGH as it's auto-sufficient (see Axiom 11) as it's also chaos."
  },
  {
    title: "XGH is your bro. But it's vengeful.",
    description:
      "While you want it XGH will always be at your side. But be careful not to abandon him. If you start something using XGH and then turn to some trendy methodology you will be fucked up. XGH doesn’t allow refactoring (see Axiom 10) and your new uptight system will collapse. When that happens only XGH can save you."
  },
  {
    title: "If it's working don't bother.",
    description:
      "Never ever change - or even think of question - a working code. That's a complete waste of time even more because refactoring doesn't exist (see Axiom 10). Time is the engine behind XGH and quality is just a meaningless detail."
  },
  {
    title: "Tests are for pussies.",
    description:
      "If you ever worked with XGH you better know what you're doing. And if you know what you're doing why test then? Tests are a waste of time. If it compiles it's good."
  },
  {
    title: "Be used to the 'living on the edge' feeling.",
    description:
      "Failure and success are really similar and XGH is not different. People normally think that a project can have greater chances of failing when using XGH. But success is just a way of seeing it. The project failed. You learned something with it? Then for you it was a success!"
  },
  {
    title: "The problem is only yours when you name is on the code docs.",
    description:
      "Never touch a class of code which you’re not the author. When a team member dies, or stays away for too long, it will eventually go down. When that happens use Axiom 8."
  }
];
export default () => (
  <ol>
    {axioms.map((axiom, index) => (
      <li key={index}>
        <b>{axiom.title}</b>
        <br />
        {axiom.description}
      </li>
    ))}
    <style>
      {`
        ol{
            margin:50px;
        }
        li{
            margin: 20px 0px;
        }
    `}
    </style>
  </ol>
);
