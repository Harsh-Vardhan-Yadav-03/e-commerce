import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About AlphaBeeta</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in athletic excellence since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Founded in 2010, AlphaBeeta has been at the forefront of athletic wear innovation.
            We believe that everyone deserves access to high-quality sports apparel that enhances
            their performance and style.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            From humble beginnings as a small online store, we've grown into a trusted brand
            serving thousands of customers across India. Our commitment to quality, innovation,
            and customer satisfaction has been the cornerstone of our success.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our products
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly evolving with the latest trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-primary mb-2">50K+</div>
            <p className="text-xl text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-xl text-muted-foreground">Products</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary mb-2">10+</div>
            <p className="text-xl text-muted-foreground">Years of Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
