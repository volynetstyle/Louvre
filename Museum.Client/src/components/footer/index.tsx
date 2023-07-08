import React from "react";

function Footer() {
	return (
		<footer className="footer-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<h6>Respecting the Musée du Louvre’s image</h6>
							<p>
								The User must respect the image and brand awareness of the Musée du Louvre and shall refrain from any action or communication which could be prejudicial, either directly or indirectly, to the said identity, image and brand awareness of the museum and its interests.								</p>
						</div>
					</div>
					<div className="col-lg-5  col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<h6>Developer remark</h6>
							<p>This site was created for educational purposes and aims only to improve accessibility to the most famous collection of art and not only in the world. The developer <strong>does not pursue the goal of profit or the issuance</strong> of the intellectual property of the Louvre Museum as its content.</p>
							<div className="" id="mc_embed_signup">
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-6 social-widget">
						<div className="single-footer-widget">
							<h6>Follow offical museum</h6>
							<p><a href="https://collections.louvre.fr/">Museum database</a></p>
							<p><a href="https://www.louvre.fr/">Offical museum site</a></p>
							<div className="footer-social d-flex align-items-center">
								<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-instagram"></i></a>
								<a href="#"><i className="fa fa-behance"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</footer>
	);
}

export default Footer