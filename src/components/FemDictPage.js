import { Link } from "react-router-dom";

function FemDictPage() {
  return (
    <div>
      <a class="skip" href="#main">Skip to Main Content</a>
      <header>
        <nav>
          <div className="hamburger" onClick={() => {
            const ul = document.querySelector("nav ul");
            ul.style.display = ul.style.display === "none" ? "flex" : "none";
          }}>&#9776;</div>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/literature">Literature</Link></li>
            <li><Link to="/history">History and Politics</Link></li>
            <li><Link to="/dictionary" className="active">Feminist Dictionary</Link></li>
          </ul>
        </nav>

        <h1>Feminist Dictionary</h1>
        <h4>Words you maybe don't understand but probably want to know</h4>
      </header>
      <main>

        <dl class="femdict">
          <div class="word">
            <dt>Agency</dt>
            <dd>Definition
              <p>
                the capacity, condition, or state of acting or of exerting power
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Agency refers to the ability to act or perform an action. In contemporary theory, it hinges on the question
                of whether individuals can freely and autonomously initiate action, or whether the things they do are in
                some sense determined by the ways in which their identity has been constructed.
              </p>
            </dd>
          </div>

          <div class="word">
            <dt>Binary</dt>
            <dd>Definition:
              <p>
                a division into two groups or classes that are considered diametrically opposite
              </p>
            </dd>
            <dd>Interpretation:
              <p>
                Two terms which are opposites. For example, rational/irrational, white/black, man/woman. The first term in a
                binary is often seen as superior to the second. These binaries in turn produce hierarchies of meaning which
                are then socially institutionalized.
              </p>
            </dd>
          </div>



          <div class="word">
            <dt>Equality</dt>
            <dd>Definition
              <p>
                the quality or state of being equal (where equal is defined as like for each member of a group, class, or
                society)
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Equality is based on the idea that no individual should be less equal in opportunity or in human rights than
                any other.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Equity</dt>
            <dd>Definition
              <p>
                justice according to natural law or right
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Equity is often viewed as the same as equality, but is not. Both revolve around fairness, but while equality
                is about treating all people the same, equity is about giving people what they need to be successful.
                Equality
                assumes that all people start from the same place and needs the same help, and this isn't true. Some people
                might need more help than others, and equity is about making sure that those people get that help and get on
                an even playing field so equality works.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Feminism</dt>
            <dd>Definition
              <p>
                the theory of the political, economic, and social equality of the sexes
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Feminism incorporates both a doctrine of equal rights for women and an ideology of social transformation
                aiming to create a world for women beyond simple social equality. This may look different for different
                women,
                e.g. a black woman and a white woman may not have the same definition of what feminism is, leading to not
                one
                but several different "feminisms" existing.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Gender</dt>
            <dd>Definition
              <p>
                the behavioral, cultural, or psychological traits typically associated with one sex
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Contemporary feminist theory is careful to distinguish between sex and gender. Gender is often seen as a
                social construct - as a performance that one acts out over life, consciously or not. It is separate from a
                person's sex, whether or not a person's correlating gender and sex match society's chosen norms, e.g.
                someone
                who's sex is assigned as female at birth, and the person's chosen gender identity is female/woman/etc. as
                well.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Hegemony</dt>
            <dd>Definition
              <p>
                the social, cultural, ideological, or economic influence exerted by a dominant group
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Fundamentally, hegemony is the power of the ruling class to convince other classes that their interests are
                the interests of all. Domination is thus exerted not by force, nor even necessarily by active persuasion,
                but
                by a more subtle and inclusive power over the economy, and over state apparatuses such as education and the
                media, by which the ruling class's interest is presented as the common interest and thus comes to be taken
                for
                granted.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Heteronormativity</dt>
            <dd>Definition
              <p>
                the attitude that heterosexuality is the only normal and natural expression of sexuality
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Heteronormativity plays into several different aspects of our lives, and revolves around people believing
                that
                there isn't and shouldn't be anything outside the binary of male and female, regarding sex and gender, and
                that these two categories should have certain characteristics, such as males being masculine, females being
                nurturing, and males only being attracted to females and vice versa. Homophobia often stems from
                heteronormative beliefs.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Intersectionality</dt>
            <dd>Definition
              <p>
                the complex, cumulative way in which the effects of multiple forms of discrimination (such as racism,
                sexism,
                and classism) combine, overlap, or intersect especially in the experiences of marginalized individuals or
                groups
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Important in the sense that people can't be narrowed down to one factor of their identity, as there are
                several different pieces that are part of the whole. For example, many black women feel like they are never
                "just a woman" or "just black", but "a black woman". This is because both identities are crucial to how they
                are treated by society.
              </p>
              <p>
                The law does a poor job of taking intersectionality into consideration, often ignoring overlapping
                discrimination that comes with different identities. Again with black women as an example, the law either
                views them as only a woman, and bases judgement off of the discrimination white women may or may not
                recieve,
                or views them as a black person, and bases judgement off of the discrimination a black man may or may not
                recieve, but can't comprehend the unique dual discrimination of both of these identities.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Oppression</dt>
            <dd>Definition
              <p>
                unjust or cruel exercise of authority or power
              </p>
            </dd>
            <dd>Interpretation
              <p>
                Women's oppression is the experience of sexism as a system of domination.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Patriarchy</dt>
            <dd>Definition
              <p>
                control by men of a disproportionately large share of power
              </p>
            </dd>
            <dd>Interpretation
              <p>
                A system of male authority which oppresses women through its social, political and economic institutions. In
                any of the historical forms that patriarchal society takes, a sex-gender system and a system of economic
                discrimination operate simultaneously. Patriarchy has power from men's greater access to, and mediation of,
                the resources and rewards of authority structures inside and outside the home.
              </p>
            </dd>
          </div>


          <div class="word">
            <dt>Sexism</dt>
            <dd>Definition
              <p>
                prejudice or discrimination based on sex
              </p>
            </dd>
            <dd>Interpretation
              <p>
                In conventional sociology "sex role" is a social role allocated to men and to women on a basis of biological
                sex. Feminist theory argues that gender associated behavior is linked arbitrarily by society to each
                biological sex. Women are given expressive traits and men instrumental traits. Sex roles are a form of
                oppression because they keep women from social activity.
              </p>
            </dd>
          </div>
        </dl>

      </main>

      <footer>
        <p class="thanks">
          Thanks for visiting! <i class="far fa-grin"></i>
        </p>
        <p>Orginal content created by Kelsey Toporski 2019</p>

        <a href="#top" class="tops">Back to Top</a>
      </footer>
    </div>
  );
}

export default FemDictPage;