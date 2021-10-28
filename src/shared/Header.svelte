<script lang="ts">
	import { bindAuthState, loginPopup, signout } from './userHandler';
	import { Offcanvas } from 'bootstrap';

	let user = undefined;
	let userOperationsBtn;

	$: if (user && userOperationsBtn) {
		const userOperationsBtnOffcanvas = new Offcanvas(userOperationsBtn);
		console.log(userOperationsBtnOffcanvas);
	}

	bindAuthState(u => {
		if (u) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			console.log(u);
			user = u;
		} else {
			console.log(u);
			user = undefined;
		}
	});
</script>

<header class="p-3 bg-dark text-white">
	<nav class="container">
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
		>
			<a
				href="/"
				class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
			>
				<img
					src="/favicon.png"
					alt="logo"
					class="img-fluid"
					style="height: 35px;"
				/>
			</a>
			{#if user}
				<div class="btn-group ms-auto">
					<button
						bind:this={userOperationsBtn}
						type="button"
						class="btn btn-outline-light"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvas"
						aria-expanded="false"
					>
						{user.displayName}
					</button>
				</div>
			{:else}
				<button
					type="button"
					class="btn btn-outline-light ms-auto"
					on:click={loginPopup}
				>
					<i class="fab fa-google" />
					Accedi
				</button>
			{/if}
		</div>
	</nav>
</header>
<div
	class="offcanvas offcanvas-end bg-dark text-white"
	tabindex="-1"
	id="offcanvas"
	aria-labelledby="offcanvasLabel"
	data-bs-scroll="true"
>
	<div class="offcanvas-header">
		<h5 class="offcanvas-title" id="offcanvasLabel">
			{#if user}
				Bentornato {user.displayName}!
			{:else}
				Benvenuto!
			{/if}
		</h5>
		<button
			type="button"
			class="btn-close text-reset"
			data-bs-dismiss="offcanvas"
			aria-label="Close"
		/>
	</div>
	<div class="offcanvas-body">
		<ul class="nav flex-column">
			{#if user}
				<li class="nav-item">
					<a
						href="/console"
						class="btn btn-outline-light border-0 w-100 text-start"
					>
						Console
					</a>
				</li>
				<li class="nav-item">
					<button
						class="btn btn-outline-light border-0 w-100 text-start"
						type="button"
						on:click={signout}
					>
						Logout
					</button>
				</li>
			{:else}
				<li class="nav-item">
					<button
						type="button"
						class="btn btn-outline-light border-0 w-100 text-start"
						on:click={loginPopup}
					>
						<i class="fab fa-google" />
						Accedi
					</button>
				</li>
			{/if}
		</ul>
	</div>
</div>
